<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="(item,index) in itemArr" :key="index">
        <h2 class="accordion-header" :id="'panelsStayOpen-heading'+index">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse'+index" aria-expanded="true" :aria-controls="'panelsStayOpen-collapse'+index">
           {{item.funName}} - {{item.directions}}
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapse'+index" class="accordion-collapse collapse bg-light" :aria-labelledby="'panelsStayOpen-heading'+index">
          <div class="accordion-body text-start">
            <p class="m-0"> {{item.fun}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        itemArr:Array
    },
    setup(props){

        const itemArr = props.itemArr;

        return{
            itemArr
        }
    }

}
</script>

<style>

.accordion{
    /* 讓html識別str裡'\n'進行換行 */
    white-space: pre-line;
}

</style>