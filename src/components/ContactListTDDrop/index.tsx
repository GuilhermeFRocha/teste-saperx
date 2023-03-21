import { ContactListTD } from "../../pages/ContactList/styles"
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import { useState } from "react"
import { Dropdown } from "./styles"

interface ContactProps  {
id: any,
id_schedule: number,
number: number
}

export function ContactListTDDrop(props: any){
  const {numberList} = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  return (
    <>
      <ContactListTD style={{position: 'relative'}}>{numberList[0].number}
        {isOpen ? <MdKeyboardArrowUp style={{marginLeft: '4px'}} onClick={() => setIsOpen(!isOpen)} /> : <MdKeyboardArrowDown style={{marginLeft: '4px'}} onClick={() => setIsOpen(!isOpen)} />}
        
        {isOpen && (
          <Dropdown>
            {numberList.map((number: ContactProps) => {
              return (
                <div id={number.id}>{number.number}</div>
              )
            })}
          </Dropdown>
        )}
      </ContactListTD>
    </>
  )
}