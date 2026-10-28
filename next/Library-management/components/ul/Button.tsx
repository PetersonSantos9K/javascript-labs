import {LucideIcon } from "lucide-react"

export type element = {
    label: string,
    specificCss: string
    IconBehind?: LucideIcon,
    IconFront?: LucideIcon
}

type button = {
    elements: element[], 
    className: string, 
    sizeIcon?: number
}

export default function Button({elements, className = "", sizeIcon=10 ,...props}: button){

    const animation = { 
        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        animation: "fadeUp 0.7s ease 0.35s both"
    }

    if(elements.length === 1){
        const element = elements[0];
        return  <button key={element.label}
                    style={animation}
                    className={`${className} ${element.specificCss}`}
                    {...props}
                >
                    {element.IconBehind && <element.IconBehind size={sizeIcon}/>}
                    {element.label}
                    {element.IconFront && <element.IconFront size={sizeIcon}/>}
                </button>
    }

    return elements.map((element) => 
        (
            <button key={element.label} 
                style={animation}
                className={`${className} ${element.specificCss}`}
                {...props}
            >   
                {element.IconBehind && <element.IconBehind size={sizeIcon}/>}                    
                {element.label}
                {element.IconFront && <element.IconFront size={sizeIcon}/>}
            </button>
        ))
}