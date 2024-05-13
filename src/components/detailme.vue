<template>
  <div class="detail">
    <v-card class="as">
    <v-row class="as">  
        <v-col cols="4">
          <v-card class="img" width="300" height="300">
              <v-img src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2018/08/c1.jpg?width=700&quality=95"></v-img>
            </v-card>
        </v-col>
        <v-col class="data" cols="7">
          <div class="hi">
            <h1>แนะนำตัวเอง</h1>
         </div> 
         <div>
            <b>ชื่อ:</b> ธีรพงศ์ ต๊ะยศ <br>
            <b>ชื่อเล่น:</b> ปลั๊ก <br>
            <b>จบจาก:</b> มหาวิทยาลัยนเรศวร <br>
            <b>สาขา:</b> วิทยาการคอมพิวเตอร์ <br>
            <b>งานอดิเรก:</b> ฟังเพลง<br>
            <b>สิ่งที่เกลียด:</b> หนอน<br>
            <b>สิ่งที่ชอบ:</b> เล่นเกม<br>
            <b>จุดแข็ง:</b> เป็นคนควบคุมอารมณ์ได้ดี<br>
            <b>ทีมกีฬาที่ชอบ:</b> บาร์เซโลน่า(ยุคก่อน)<br>
          </div>
        </v-col>  
        
    </v-row>
    </v-card>   
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .detail {
  display: flex ;
  justify-content: center;
  margin-top: 100px ;
  margin-bottom: 100px;
  
}
  .img{
  display:flex ;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  
 }
 .data{
  display:block;
  justify-content: center;
  padding-inline: 30px;
 }
 .hi{
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  color:skyblue;
  font-size: 16px;
 }
 .as{
  background-color: bisque;
 }
</style>