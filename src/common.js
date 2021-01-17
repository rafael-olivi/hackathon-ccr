import { Alert } from "react-native"

const server = "https://api-ig3.conveyor.cloud"

function showError(err){
    Alert.alert('Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert("Sucesso!", msg)
}

export { server, showError, showSuccess }