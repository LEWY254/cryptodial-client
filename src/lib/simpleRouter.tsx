import React from "react"
type route={
    name:string
    component:()=>React.JSX.Element
}

class simpleRouter{
    private routes:route[]
    private history:string[]
    private listeners:(()=>void)[]

    constructor(routes_array:route[],current_screen:string){
        this.routes=routes_array
        this.history=[current_screen]
        this.listeners=[]
    }

    get_current_screen(): JSX.Element {
        const currentScreen = this.history[this.history.length - 1];
        const match = this.routes.find((individual_route) => individual_route.name === currentScreen);
    
        return match ? match.component() : <div>Screen Not found</div>;
    }
    
    navigate(screen:string):void{
        if (this.routes.some((individual_route)=>individual_route.name==screen)){
            this.history.push(screen)
            this.notify_listeners()
        }else{
            console.log(`$(screen) not found`)
        }
    }

    go_back(){
        if(this.history.length>1){
            this.history.pop()
            this.notify_listeners()
        }else{
            console.log("No previous screen to go back to")
        }
    }

    onChange(listener:()=>void){
        this.listeners.push(listener)
    }

    private notify_listeners(){
        this.listeners.forEach((listener)=>listener())
    }
    }

export default simpleRouter