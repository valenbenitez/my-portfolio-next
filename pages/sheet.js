'use client'
import React from "react";
import Papa from 'papaparse'

async function getData() {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTcc-2VeqyuO8Z83sefucFWA26HI9NO2pVcwJXWFijPYGBkvv5_K8B5WnM1KE9tvfd_y1cQaLpkkFWe/pub?gid=0&single=true&output=csv')
    const data = await res.text()
    const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, { header: true, complete: resolve, error: reject })
    })
    return parsed.data
}

export default function Sheet() {

    React.useEffect(() => {
        const data = getData().then(result => console.log(result))
    }, [])

    return (
        <div>
            <label>Sheet component</label>
        </div>
    )
}