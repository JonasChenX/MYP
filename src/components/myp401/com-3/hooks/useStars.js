import { ref } from "vue"

export function useStars (num,callBack){

    const starNum = ref(num);

    const setStarNum = (num) => {
        starNum.value = num
        callBack();
    }

    return{
        starNum,
        setStarNum
    }
}