import React from 'react'

export default function Heading(props) {
  return (
    <>
    <div className="pt-5 text-slate-200 underline underline-offset-8 flex justify-center text-4xl">
          <h1>{props.head}</h1>
        </div>
    </>
  )
}
