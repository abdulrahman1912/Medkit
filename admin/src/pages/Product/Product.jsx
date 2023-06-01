import React from 'react'
import Style from './product.module.css'
import { SpaceBetween, Card } from '../../components'
import antibacterial from '../../assets/antibacterial.svg'
import antidepressent from '../../assets/antidepressent.svg'
import antifungi from '../../assets/antifungal.svg'
import antihypertensive from '../../assets/antihypertensive.svg'
import antimaleria from '../../assets/antimaleria.svg'
import tablet from '../../assets/tablets.svg'
import syrup from '../../assets/syrup.svg'
import vitamins from '../../assets/vitamins.svg'



export const Product = () => {

    return (
        <div className={Style.main}>
            <SpaceBetween
                style={{ fontSize: 30, fontWeight: '800' }}
                text1={'Categories'}

            />

            <div className={Style.row}>
                <Card
                    img={antibacterial}
                    text={'Anti Bacterial'}
                    number={28}
                    color={'#DC2028'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
                <Card
                    img={antidepressent}
                    text={'Anti Depressent'}
                    number={28}
                    color={'#FC657E'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
                <Card
                    img={antifungi}
                    text={'Anti Fungi'}
                    number={28}
                    color={'#DC2028'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
                <Card
                    img={antihypertensive}
                    text={'Anti Hypertensive'}
                    number={28}
                    color={'#DA4531'}
                    imgSize={50}
                    fontSize={27}
                    focus
                />
            </div>

            <div className={Style.row}>
                <Card
                    img={antimaleria}
                    text={'Anti Maleria'}
                    number={28}
                    color={'#FC657E'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
                <Card
                    img={tablet}
                    text={'Tablets'}
                    number={28}
                    color={'#82CA04'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
                <Card
                    img={syrup}
                    text={'Syrup'}
                    number={28}
                    color={'#5686E1'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
                <Card
                    img={vitamins}
                    text={'Vitamins'}
                    number={28}
                    color={'#FECE2C'}
                    imgSize={50}
                    fontSize={30}
                    focus
                />
            </div>



        </div>
    )
}
