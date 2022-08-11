import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './ReactPhone.css';

export const ReactPhone = () => {

    const { phone, setPhone } = useState();    

  return (
    <div>
        <PhoneInput
            country={'co'}
            value={phone}
            onChange={setPhone}
        />
        {phone}
    </div>
  )
}
