<template>   
<h1>hola papata</h1>
<table>
    <img src="../../assets/imgg/Logo2.png" alt="">
    <tr>
      <th></th>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Precio</th>
    </tr>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
      <td>Dato 3</td>
      <td>Dato 4</td>
    </tr>
  </table>

  
  

</template>

<style>

table {
      width: 100%;
      border-collapse: collapse;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    @media (max-width: 600px) {
      th, td {
        display: block;
        width: 100%;
      }
    }
</style>