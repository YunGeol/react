import { add } from '../src/util';
import styled from 'styled-components';

const MyP = styled.div` 
                color: red; 
                font-size: 18pt;
            `;
export default function Page1() {
    return (
        <div>
            <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
            <MyP>this is home page</MyP>
        </div>
    );
}
