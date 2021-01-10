import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <div class="Contacts">
      <main>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column">
            <h1>Контакты</h1>
            <div>
              <h3>Номер телефона:</h3>
              <a href="tel:+77070250900">+7(707)025-09-00</a>
            </div>
            <div>
              <h3>E-mail:</h3>
              <a href="mailto:yerke99@gmail.com">yerke99@gmail.com</a>
            </div>
          </div>
          <div className="">
            
          </div>
        </div>

      </main>
    </div>
  )
}

export default Contacts;
