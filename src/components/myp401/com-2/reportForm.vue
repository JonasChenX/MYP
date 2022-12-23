<template>
    <form class="row m-0 p-4">
        <div class="col-md-6 p-0"  v-show="typeArr.includes(val.type)" v-for="(val, index) in allAttributes" :key="index">
            <div class="row m-0 border border-1 p-3 h-100 align-items-center">
                <!-- 欄位名稱 -->
                <div class="col-md-4 text-start p-0 pe-3" :class="{'col-md-12':val.isCol_12}">
                    <label  class="col-form-label">{{val.label}}</label>
                </div>

                <!-- type:radio -->
                <template v-if="val.type === 'radio'">
                    <div class="col p-0 text-start" v-for="(item,idx) in val.values" :key="'radio_'+index+idx">
                        <input :id="item.value+index" class="form-check-input me-2" type="radio" :value="item.value" v-model="val.initialData">
                        <label :for="item.value+index" class="form-check-label">
                            {{item.label}} 
                        </label>
                    </div>
                </template>

                <!-- type:radioButton -->
                <template v-if="val.type === 'radioButton'">
                    <div class="col-6 text-start">
                        <div class="form-check form-check-inline p-0" v-for="(item,idx) in val.values" :key="'radioButton_'+index+idx">
                            <input :id="item.value+index" class="btn-check me-2" type="radio" :value="item.value" v-model="val.initialData" autocomplete="off">
                            <label :for="item.value+index" class="btn btn-outline-secondary">
                                {{item.label}} 
                            </label>
                        </div>
                    </div>
                </template>

                <!-- type:input -->
                <template v-if="val.type === 'input'">
                    <div class="col p-0" >
                        <input :id="'input_'+index" type="text" class="form-control" :required="val.required" v-model="val.initialData" @input="textInputEvent($event.target.value, val, 'input_'+index)">
                    </div>
                </template>

                <!-- type:rangeInput -->
                <template v-if="val.type === 'rangeInput'">
                     <div class="p-0 col input-group" v-for="(type, y) in val.child" :key="'rangeInput'+y">
                        <input :id="'rangeInput_'+index + y" type="text rounded" :required="type.required" class="form-control" v-model="type.initialData" @input="textInputEvent($event.target.value, type, 'rangeInput_'+index + y)">
                        <div class="my-auto mx-2" v-if="y !== val.child.length-1 ">{{ '~' }}</div>
                     </div>
                </template>

                <!-- type:select -->
                <template v-if="val.type === 'select'">
                    <div class="p-0 col">
                        <select class="form-select" v-model="val.initialData">
                            <option v-for="item in val.values" :key="item.value" :value="item.value">{{item.label}}</option>
                        </select>
                    </div>
                </template>

                <!-- 錯誤訊息 -->
                <div class="text-danger mt-2 mr-2 d-flex flex-row-reverse">
                    {{val.errorStr}}
                </div>

            </div>
        </div>
    </form>
</template>

<script>
import { onMounted, reactive, ref, nextTick } from '@vue/runtime-core';
import axios from 'axios';
import {otherFun, strFun} from '@/common/functionMain'
export default {
    props:{
        propId:String
    },
    setup(props){

        const typeArr = ['input','radio','radioButton','rangeInput','select']
                
        let schema = null
        onMounted(()=>{{
            let formId = props.propId
            let url = `static/${formId}.json`;
            axios.get(url).then((res) => {

                schema = Object.assign({},res.data.schema)
                
                //初始化
                allAttributes.value = init(res.data.schema.groups,res.data.model)

            }).catch(error => {
                console.log(error);
            })
      
        }})

        //初始化的方法
        const allAttributes = ref();
        const init = (groups,model) => {
            const result = reactive([])

            groups.forEach((item)=>{
                   
                    if(item['fields']['child']){
                        item['fields']['child'].forEach((itemChild)=>{

                            let childInitialData = ref();
                            childInitialData.value =  model[itemChild.model]

                            //初始化
                            itemChild.initialData = childInitialData.value;
                            itemChild.apiData = reactive([]);
                            itemChild.destination = reactive([]);

                            if(itemChild['child']){
                                itemChild['child'].forEach((itemChildChild)=>{
                                    let childChildInitialData = ref()
                                    childChildInitialData.value =  model[itemChildChild.model]
                                    //初始化
                                    itemChildChild.initialData = childChildInitialData.value;
                                })
                            }

                        })
                    }
                    
                    //初始化 Json的fields
                    let obj = reactive({
                        child: item.fields.child, //定義 一格放置多欄位
                        type: item.fields.type, //定義 欄位的類型
                        isCol_12: item.fields.isCol_12,
                        inputType: item.fields.inputType, //定義 input種類 限制輸入的格式
                        fontColor: item.fields.fontColor, //定義 label顏色
                        maxLength:item.fields.maxLength, //定義 最高字符長度
                        label: item.fields.label, //定義 標題
                        model: item.fields.model, //定義 model名稱(傳至後端的key)
                        values: item.fields.values, //定義 多個值(select...)
                        required: item.fields.required, //定義 是否必填
                        apiData: [], //存放api資料
                        destination: [], //顯示已選擇的資料
                        initialData: model[item.fields.model], //綁定資料用[JSON設定檔的值]
                        errorStr: '',
                        childSelected: [],
                    });
                    result.push(obj);
                })
            return result
        }
        
        //取得表單資料
        const getData = () =>{
            //將綁定參數全部抓出來
            let modelObj = {}
            const addObj = (Arr) =>{
                Arr.forEach(item=>{
                    if(item.model){
                        modelObj[item.model] = item.initialData
                    }
                    if(item['child']){
                        addObj(item['child'])
                    }
                })
            }
            addObj(allAttributes.value)

            //過濾value為undefined
            modelObj = otherFun.objFilterForVal(modelObj,(item)=>{
                return item !=undefined;
            })
            
            const result = {
                id:props.propId,
                modelObj,
                schema
            }

            console.log(result);
            return result
        }

        //依照inputType格式化
        const textInputEvent = (newValue, model, id) =>{
            //跨欄邏輯
            const goNext = (element) =>{
                // 表單內可 focus 集合
                const elementsCollection = element.form.elements;
                // 目前游標 index
                const currentIndex = Array.from(elementsCollection).indexOf(element);
                elementsCollection[currentIndex < elementsCollection.length - 1 ? currentIndex + 1 : 0].focus();
            };

            switch (model['inputType']) {
                // 金錢
                case 'money':
                nextTick().then(() => {
                    //格式化-千分位
                    let val = strFun.inputOnlyNum(newValue.replace(/,/g,''));
                    model['initialData'] = strFun.format(strFun.inputOnlyNum(val));
                });
                break

                case 'number':
                nextTick().then(() => {
                    //格式化-只能輸入數字
                    model['initialData'] = strFun.inputOnlyNum(newValue.replace(/,/g,''));
                });
                break

                //輸入值轉大寫
                case 'upperCase':
                model['initialData'] = newValue.toUpperCase();
                break

                // 預設輸入什麼值就什麼值
                default:
                model['initialData'] = newValue;
            }

            // 如果處理完後達到最大長度，跳至下一欄位
            if (model['maxLength'] && model['initialData'].length === Number(model['maxLength'])) {
                goNext(document.getElementById(id));
            }
        };

        return{
            allAttributes,
            typeArr,
            getData,
            textInputEvent,
            otherFun,
            strFun
        }
    }
}
</script>

<style>
input:required {
  background-color: #ffffc9;
}
input:required:focus {
  background-color: #ffffc9;
}

</style>