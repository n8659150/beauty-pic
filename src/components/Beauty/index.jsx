import React, { useState, useEffect } from "react";
import { useRequest } from '@umijs/hooks';
import { URL, port, apiRoute } from '../../config';
const fullURL = `http://${URL}:${port}/${apiRoute}`;
export function Beauty(props) {
    const { data, error, loading } = useRequest(`${fullURL}=285906324`);
    if (data) console.log(data.imgSrc);
    return <div>{props.qid}</div>
}
