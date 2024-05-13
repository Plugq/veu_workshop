<template>
  <div class="container">
    <v-card>
      <v-row class="as">
        <v-col class="box" cols="5">
          <v-card class="img">
            <v-img
              src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2018/08/c1.jpg?width=700&quality=95"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="7">
          <div class="hi">
            <h2>แนะนำตัวเอง</h2>
          </div>
          <div class="asc">
            <v-table>
              <tr>
                <td><b>ชื่อ:</b> ธีรพงศ์ ต๊ะยศ</td>
              </tr>
              <tr>
                <td><b>ชื่อเล่น:</b> ปลั๊ก</td>
              </tr>
              <tr>
                <td><b>จบจาก:</b> มหาวิทยาลัยนเรศวร</td>
              </tr>
              <tr>
                <td><b>สาขา:</b> วิทยาการคอมพิวเตอร์</td>
              </tr>
              <tr>
                <td><b>งานอดิเรก:</b> ฟังเพลง</td>
              </tr>
              <tr>
                <td><b>สิ่งที่เกลียด:</b> หนอน</td>
              </tr>
              <tr>
                <td><b>สิ่งที่ชอบ:</b> เล่นเกม</td>
              </tr>
              <tr>
                <td><b>จุดแข็ง:</b> เป็นคนควบคุมอารมณ์ได้ดี</td>
              </tr>
              <tr>
                <td><b>ทีมกีฬาที่ชอบ:</b> บาร์เซโลน่า(ยุคก่อน)</td>
              </tr>
            </v-table>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
}

.img {
  display: flex;
  border: 3px solid black;
  width: 250px;
  height: 300px;
}

.hi {
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(133, 151, 255);
  font-size: 16px;
  padding-inline: 100px;
  border-bottom: 1px solid black;
  text-align: center;
}
.as {
  border-color: rgb(49, 197, 210);
  border-style: solid;
  box-shadow: 5px 5px gray;
  background-color: rgb(222, 235, 240);
}
.asc {
  padding-inline: 30px;
  color: rgb(14, 76, 55);
  text-align: center;
}
</style>
