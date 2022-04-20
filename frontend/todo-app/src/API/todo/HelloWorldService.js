import axios from "axios"


class HelloWorldService {
    executedHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executedHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }
    executedHelloWorldPathVariableService(name) {
        // let username = 'TestUserName'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        //     {
        //         headers: {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );
    }

}

export default new HelloWorldService()