export default {
    goto(object,path,state){
        object.props.history.push(path,state)
    },
    goBack(object){
        object.props.history.goBack()
    },
    getParam(){
    }
}
