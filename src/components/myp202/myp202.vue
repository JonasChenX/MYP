<template>
    <!-- 資料來源:
        https://www.jianshu.com/p/b28f5cd4d55a
        https://stackoverflow.com/questions/24395693/how-to-set-cell-width-when-export-xlsx-files-with-js-xlsx
        https://zhuanlan.zhihu.com/p/257845606
        https://juejin.cn/post/6991755278911963173
     -->
    <div class="col-8 m-auto">
        <table class="table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col" v-for="item in showHead" :key="item">{{item}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,idx) in showRows" :key="idx">
                <th scope="row">{{idx}}</th>
                <td v-for="item in row" :key="item">{{item}}</td>
            </tr>
        </tbody>
        </table>
    </div>
    <div class="btn btn-info" @click="ExportXlsx()">點擊匯出</div>

</template>

<script>
import * as XLSX from 'xlsx'
export default {
    setup(){

        //匯出資料
        const tabelData = [
            {
                date:'2016-06-30',
                name:'Tom1111111111111111',
                address:'Taiwan',
                nameZn:'湯姆'
            },
             {
                date:'2022-01-28',
                name:'Joson',
                address:'Japan',
                nameZn:'強納森'
            },
            {
                date:'2022-01-30',
                name:'Cindy',
                address:'KK',
                // nameZn:'熙娣'
            }
        ]

        //標頭轉中文
        const head = {
            date: '日期',
            name: '名字',
            address: '地址',
            nameZn: '中文名字'
        }
        //轉化中文後的陣列[匯出資料]
        const tabelDataToZN = tabelData.map(item => {
            const obj = {}
            for (const k in item) {
                if (head[k]) {
                    obj[head[k]] = item[k]
                } 
            }
            return obj
        })

        const ExportXlsx = () => {
            // 創建工作表
            const data = XLSX.utils.json_to_sheet(tabelDataToZN)
            
            //定義 留白寬度
            const COL_MARGIN = 2
            //調整寬度
            const colsConfig = []
            Object.keys(head).forEach((item)=>{
                //比對 資料長度 取最大的 最小為10
                const maxWidth = tabelData.reduce((w, r) => Math.max(w, r[item]? r[item].length + COL_MARGIN : 0 ), 10);
                colsConfig.push({ 
                    wch: maxWidth 
                })
            })
            data["!cols"] = [...colsConfig]

            //調整高度
            const rowsConfig = []
            for (let index = 0; index < tabelDataToZN.length + 1; index++) {
                rowsConfig.push({
                    hpx: 18
                })
            }
            data["!rows"] = [...rowsConfig]

            console.log(data);

            // 創建工作簿
            const wb = XLSX.utils.book_new()
            // 將工作表放入工作簿中
            XLSX.utils.book_append_sheet(wb, data, 'data')
            // 生成文件並下载
            XLSX.writeFile(wb, 'test.xlsx')
        }

        const showHead = [...Object.values(head)]
        const showRows = tabelDataToZN.map( item => [...Object.values(item)] )

        return{
            ExportXlsx,
            showHead,
            showRows
        }
    }
}
</script>