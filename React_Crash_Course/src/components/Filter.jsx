import React from 'react'

const Filter = () => {
    const users = [
        {id:1,name:'suman',active:false},
        {id:2,name:'superman',active:false},
        {id:3,name:'spiderman',active:true},
        {id:4,name:'batman',active:true},
        {id:5,name:'thr',active:false},
    ]

    const activeUser = users.filter((user)=>user.active)

    console.log(activeUser)
  return (
    <div>
        <ul>
            {activeUser.map((data)=><li key={data.id}>{data.name}</li>)}
        </ul>
    </div>
  )
}

export default Filter