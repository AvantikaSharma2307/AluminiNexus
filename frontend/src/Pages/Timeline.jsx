import React from 'react'

export default function Timeline() {
  return (
    <>
    <div class="radio-input">
      <label>
      <input value="value-1" name="value-radio" id="value-1" type="radio" checked=""/>
      <span>1</span>
      </label>
      <label>
        <input value="value-2" name="value-radio" id="value-2" type="radio"/>
      <span>2</span>
      </label>
      <label>
        <input value="value-3" name="value-radio" id="value-3" type="radio"/>
      <span>3</span>
      </label>
      <label>
        <input value="value-3" name="value-radio" id="value-3" type="radio"/>
      <span>4</span>
      </label>
      <span class="selection"></span>
    </div>
    </>
  )
}
