function request( url , data = false , method = "GET") {


    return new Promise(async(resolve,reject) =>{

        const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'ea3115c7aamsheb7d526122dd4dfp1419b8jsnb24df3634482',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
                const response = await fetch(url,options)

                if(data && method === "POST"){

                    options.body = JSON.stringify(data)
                }

               
                const result = await response.json()
                if(response.ok){

                  
                    resolve(result)
                } else {

                    reject(result)
                }
    })
}

export const post =(url,data) => request(url,data,"POST")
export const get = url => request(url)