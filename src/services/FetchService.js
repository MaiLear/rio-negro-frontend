
export default class FetchService{
    constructor(){
        this.signal = new AbortController().signal;
        this.fetchOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            signal: this.signal

        }
    }

    async service(options){
        const {fetchUrl,fetchOptions={}} = options;
        
        try{
            const response = await fetch(fetchUrl,fetchOptions);
            
            if(!response.ok) throw{err:true,errStatus:response.status,errMessage:response.text||'Ocurrio un error'}
            
            const json = await response.json();
            return json;
            
        }catch(err){
            return err.err ? err : {err:true,errMessage: err};
        }

    }

    async post(fetchUrl,fetchOptions,success,error){
        this.fetchOptions.method = 'POST';
        this.fetchOptions.headers = fetchOptions.headers ?  {...this.fetchOptions.headers,...fetchOptions.headers} : this.fetchOptions.headers;
        this.fetchOptions.body = fetchOptions.body;

        const response = await this.service({fetchUrl,fetchOptions:this.fetchOptions});

        if(response.err){
            error(response);
        }
        else{
            success(response);
        }
    }
    async get(fetchUrl,success,error){

        const response = await this.service({fetchUrl,fetchOptions: this.fetchOptions});

        if(response.err){
            
            error(response);
        }
        else{
            success(response);
        }
    }
}