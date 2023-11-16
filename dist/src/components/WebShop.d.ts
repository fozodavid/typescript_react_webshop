import React from "react";
type Data = {
    "_id": string;
    "index": number;
    "guid": string;
    "price": string;
    "picture": string;
    "color": string;
    "category": string;
    "brand": string;
    "line": string;
    "model": number;
    "name": string;
    "description": string;
    "registered": string;
    "tags": string[];
};
interface WebShopInterface {
    data: Data[];
}
declare const WebShop: React.FC<WebShopInterface>;
export default WebShop;
