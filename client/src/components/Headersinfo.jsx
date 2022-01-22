import React from 'react';

function Headersinfo({ sectionName, sectionTitle }) {
    return (
        <div>
            <div class="sectionName text-center">
                <h2 class="sectionTitle uppercase">{sectionName}</h2>
            </div>
            <div className="-mt-36 text-center">
                <h2 className="font-bold text-black uppercase" style={{ fontSize: 40 }}>{sectionTitle}</h2>
            </div>
        </div>
    );
}

export default Headersinfo;
