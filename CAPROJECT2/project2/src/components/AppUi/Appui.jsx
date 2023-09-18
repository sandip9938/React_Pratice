import React from 'react'
import Button from '../BUtton/Button'
import Card from '../CardUi/Card'
function Appui() {
  return (
    <div>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
<Button/>

                    </div>

                    <div className="w-full max-w-sm mx-auto">
<Card  />                   
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Appui
