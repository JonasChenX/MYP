export default {
    mounted(el) {
        const oSelectorInput = el.querySelector('.selector-input');
        const oInput = oSelectorInput.querySelector('input');
        
        const oPlaceHolder = oSelectorInput.querySelector('label');
        const oSelectorMenu = el.querySelector('.selector-menu')

        oInput.addEventListener('focus',()=>{
            //focus時,placeholder會消失
            oPlaceHolder.style.display = 'none'
            setTimeout(()=>{
                oSelectorMenu.style.display = 'block'
            },200)
        },false)

        oInput.addEventListener('blur',()=>{
            setTimeout(()=>{
                oSelectorMenu.style.display = 'none'

                //若input沒有內容,placeholder才會顯示
                if(oInput.value.length === 0){
                    oPlaceHolder.style.display = 'block'
                }
            },200)
        },false)
    }
}