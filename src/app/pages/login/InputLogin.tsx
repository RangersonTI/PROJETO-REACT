
import React from 'react';

interface IInputLoginProps{
    label? : string;
    value? : string;
    type?:string;
    name?:string;
    id?:string;
    class?:string;
    onChange?: (newValue: string) => void | undefined;
    onPressEnter?: () => void;
}

//export const InputLogin: React.FC<IInputLoginProps> = (props) => {
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return(
        <div>
            <label>{props.label}</label>
            <input
            ref={ref}
            value={props.value}
            name={props.name}
            type={props.type}
            id={props.id}
            className={props.class}
            onChange={e=> props.onChange && props.onChange(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' ? props.onPressEnter : undefined}/><br/>
        </div>
    );
});