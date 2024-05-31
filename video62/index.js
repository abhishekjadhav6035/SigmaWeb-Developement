const adjective = prompt("Inter the Adjactive from following:\n 1)Crazy\n2)Amazing\n3)Fire");
console.log(adjective);

const shopName = prompt("Inter the ShopName from following:\n 1)Engine\n2)Foods\n3)Garments");
console.log(shopName);

const suffix = prompt("Inter the Sufics from following:\n 1)Bros\n2)Limited\n3)Hub");
console.log(suffix);


if(
    (adjective==="Crazy" ||adjective==="Amazing" ||adjective==="Fire") &&
    (shopName==="Engine" ||shopName==="Foods" ||shopName==="Garments") &&
    (suffix==="Bros" ||suffix==="Limited" || suffix==="Hub")
){
    const companyName = adjective+shopName+suffix;
    // const companyName = `${adjective} ${shopName} ${suffix}`;
    console.log("The name of company is:-"+ companyName);
}else{
    console.log("Enter the right value");
}
