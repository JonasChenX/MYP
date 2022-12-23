import { useNotification } from "@kyvg/vue3-notification";
const notification = useNotification()

const toastTypes = {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
    WARN: 'warn'
}

const position = {
    BOTTOM_RIGHT:"1",
    TOP_RIGHT:"2",
    BOTTOM_LEFT: "3",
    TOP_LEFT:"4",
    TOP_CENTER:"5"
}

//成功
const useSuccessNotification = (title, text= '') => {
    notification.notify({
        title: title,
        type: toastTypes.SUCCESS,
        text: text,
        group: position.BOTTOM_RIGHT,
        duration: 1000,
    });
}

//錯誤
const useErrorNotification = (title, text= '') => {
    notification.notify({
        title: title,
        type: toastTypes.ERROR,
        group: position.BOTTOM_RIGHT,
        text: text,
    });
}

//通知
const useInfoNotification = (title, text= '') => {
    notification.notify({
        title: title,
        type: toastTypes.INFO,
        group: position.BOTTOM_RIGHT,
        text: text,
    });
}

//警告
const useWarnNotification = (title, text= '') => {
    notification.notify({
        title: title,
        type: toastTypes.WARN,
        group: position.BOTTOM_RIGHT,
        text: text,
    });
}

export const useNotificationObj = {
    success:useSuccessNotification,
    error:useErrorNotification,
    info:useInfoNotification,
    warn:useWarnNotification
}

export const testPosistionObj = {
    bottomRight: () =>{
        notification.notify({
            title: "右下",
            type: toastTypes.INFO,
            group: position.BOTTOM_RIGHT,
        });
    },
    topRight:() =>{
        notification.notify({
            title: "右上",
            type: toastTypes.INFO,
            group: position.TOP_RIGHT,
        });
    },
    bottomLeft:() =>{
        notification.notify({
            title: "左下",
            type: toastTypes.INFO,
            group: position.BOTTOM_LEFT,
        });
    },
    topLeft:() =>{
        notification.notify({
            title: "左上",
            type: toastTypes.INFO,
            group: position.TOP_LEFT,
        });
    },
    topCenter:() =>{
        notification.notify({
            title: "中上",
            type: toastTypes.INFO,
            group: position.TOP_CENTER,
        });
    },
}