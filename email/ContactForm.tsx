import React from 'react'
import {Html,
    Hr,
     Heading,
      Head,
       Body,
        Text, 
        Container,
         Preview, 
         Section} 
         from  "@react-email/components"

import {Tailwind} from  "@react-email/tailwind"

type contactEmailProps = {
    message:string,
    SenderEmail:string
}




export const ContactForm:React.FC<contactEmailProps> = ({message, SenderEmail}) => {
   
  return  <Html>
            <Head title='Message from potforlio' />
            <Preview>Messsage from your Potfolio website</Preview>
            <Tailwind>
                <Body className='bg-gray-200 text-black'>
                    <Container>
                        <Section className='bg-white my-2 px-[20px] '>
                        
                            <Heading className='leading-tight text-lg'>You recieved this messsage from the contact form potfolio</Heading>
                                <Hr />
                            <Text>{message}</Text>
                            <Text>You recieved this email from {SenderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
  </Html>
  
  
}

