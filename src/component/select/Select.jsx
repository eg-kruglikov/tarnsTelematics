import React from 'react'

export default function Select() {
    return (
        <div>

            <select className="" required aria-label="select example">
                <option value="">Откройте это меню выбора</option>
                <option value="1">Один</option>
                <option value="2">Два</option>
                <option value="3">Три</option>
            </select>
        </div>
    )
}
