<template>
  <div @scroll="handleScroll" class="scroll__police">
    <div class="police">
      <div class="police__title">
        <h1>
          <span>
              
              {{$t('agreement__title__first')}}
              <br />
              {{$t('agreement__title__second')}}
          </span>
         
        </h1>
      </div>

      <div class="police__text">
        <ul>
          <li>
            <strong>1. {{$t('agreement_1')[0][1]}}</strong>

            <ul>
              <li>{{$t('agreement_1')[0][2]}}</li>
              <li>
                {{$t('agreement_1')[0][3]}}
                <ul>
                  <li>
                    <strong>{{$t('agreement_1')[0][4]}}«eQonaq»</strong> -{{$t('agreement_1')[0][5]}}
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][6]}}</strong> &ndash; {{$t('agreement_1')[0][7]}}
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][8]}}</strong> - {{$t('agreement_1')[0][9]}}
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][10]}}</strong> - {{$t('agreement_1')[0][11]}}
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][12]}}</strong> &ndash; {{$t('agreement_1')[0][13]}}
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][14]}}</strong>&ndash; {{$t('agreement_1')[0][15]}} &laquo;{{$t('agreement_1')[0][16]}}&raquo; &laquo;KazakhTourism&raquo;;
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][17]}}</strong> - {{$t('agreement_1')[0][18]}}
                  </li>
                  <li>
                    <strong>{{$t('agreement_1')[0][19]}}</strong> - {{$t('agreement_1')[0][20]}}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <p>{{$t('agreement_1')[0][21]}}</p>

        <ul>
          <li>
            <strong>2. {{$t('agreement_2')[0][1]}}</strong>

            <ul>
              <li>{{$t('agreement_2')[0][2]}}</li>
              <li>{{$t('agreement_2')[0][3]}}</li>
              <li>{{$t('agreement_2')[0][4]}}</li>
              <li>
                {{$t('agreement_2')[0][5]}}
                <ul>
                  <li>{{$t('agreement_2')[0][6]}}</li>
                  <li>{{$t('agreement_2')[0][7]}}</li>
                  <li>{{$t('agreement_2')[0][8]}}</li>
                </ul>
              </li>
              <li>{{$t('agreement_2')[0][9]}}</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            <strong>3.{{$t('agreement_3')[0][1]}}</strong>

            <ul>
              <li>
                <strong>
                  <em>{{$t('agreement_3')[0][2]}}</em>
                </strong>

                <ul>
                  <li>{{$t('agreement_3')[0][3]}}</li>
                  <li>{{$t('agreement_3')[0][4]}}</li>
                  <li>{{$t('agreement_3')[0][5]}}</li>
                </ul>
              </li>
              <li>
                <strong>
                  <em>{{$t('agreement_3')[0][6]}}</em>
                </strong>
                <ul>
                  <li>{{$t('agreement_3')[0][7]}}</li>
                </ul>
              </li>
              <li>
                <strong>
                  <em>{{$t('agreement_3')[0][8]}}</em>
                </strong>
                <ul>
                  <li>{{$t('agreement_3')[0][9]}}</li>
                  <li>{{$t('agreement_3')[0][10]}}</li>
                  <li>{{$t('agreement_3')[0][11]}}</li>
                </ul>
              </li>
              <li>
                <strong>
                  <em>{{$t('agreement_3')[0][12]}}</em>
                </strong>
                <ul>
                  <li>
                    {{$t('agreement_3')[0][13]}}
                    
                    <br />{{$t('agreement_3')[0][14]}}
                    <br />- {{$t('agreement_3')[0][15]}}
                    <br />-  {{$t('agreement_3')[0][16]}}
                  </li>
                  <li>{{$t('agreement_3')[0][17]}}</li>
                  <li>{{$t('agreement_3')[0][18]}}</li>
                  <li>{{$t('agreement_3')[0][19]}}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            <strong>4. {{$t('agreement_4')[0][1]}} </strong>

            <ul>
              <li>{{$t('agreement_4')[0][2]}}</li>
              <li>{{$t('agreement_4')[0][3]}}</li>
              <li>{{$t('agreement_4')[0][4]}}</li>
              <li>
                {{$t('agreement_4')[0][5]}}
               
                <ul>
                  <li> {{$t('agreement_4')[0][6]}}</li>
                  <li> {{$t('agreement_4')[0][7]}}</li>
                </ul>
              </li>
              <li>{{$t('agreement_4')[0][8]}}</li>
              <li>{{$t('agreement_4')[0][9]}}</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            <strong>5. {{$t('agreement_5')[0][1]}}</strong>
            <ul>
              <li>{{$t('agreement_5')[0][2]}}</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="police__button">
        <div class="police__button__flex">
          <p>{{$t('agreement_5')[0][3]}}</p>
          <button v-if="view_btn == true" class="enabled__button" @click="policeAccepted">{{$t('agreement_5')[0][4]}}</button>
          <button v-else class="disabled__button">{{$t('agreement_5')[0][4]}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       view_btn: false
    }
  },
  methods: {
      policeAccepted () {
          this.$emit('police__accepted', true)
      },
      handleScroll () {
        let scroll_top = document.querySelector('.scroll__police').scrollTop
        let scrollHeight__and_clientHeight = document.querySelector('.scroll__police').scrollHeight - document.querySelector('.scroll__police').clientHeight

        if (scroll_top >= scrollHeight__and_clientHeight) {
            this.view_btn = true
        } else {
            this.view_btn = false
        }
      }
  },
};
</script>
<style lang="less" scoped>
@mobile: 900px;

.scroll__police {
  width: 100%;
  height: 70%;
  position: absolute;
  overflow-y: scroll;
  left: 0;
    
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #fff; 
  }
  &::-webkit-scrollbar-thumb {
    background: #FDE88D; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #FDE88D; 
  }

  .police {
    width: 85%;
    margin: 0 auto;
    @media (max-width: @mobile) {
      width: 95%;
    }
    .police__title {
      width: 100%;
      text-align: center;
      h1 {
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          font-size: 28px;
          font-family: "MontserratBold";
          @media (max-width: @mobile) {
            font-size: 16px;
          }
          // span {
          //     text-transform: uppercase;
          // }
      }
    }
    .police__text {
      text-align: left;
      margin-top: 20px;
      font-family: "MediumMedium";
      @media (max-width: @mobile) {
        padding-bottom: 14%;
      }
      ul {
        list-style-type: none;
        @media (max-width: @mobile) {
          font-size: 13px;
        }
      }
      p {
        @media (max-width: @mobile) {
          font-size: 13px;
        }
      }
    }
    .police__button {
      border-top: 1px solid #ccc;
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      .police__button__flex {
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-bottom: 10px;
        padding-top: 10px;
        @media (max-width: @mobile) {
            flex-wrap: wrap; 
        }
        p {
          margin: 0;
          color: #a32f24;
          font-weight: normal;
          font-family: "MediumMedium";
          width: 80%;
          @media (max-width: @mobile) {
            font-size: 12px;
            width: 100%;
          }
        }
        .disabled__button {
          background: #ccc;
          border: 3px solid #ccc;
        }
        .enabled__button {
          background: #fde88d;
          border: 3px solid #fde88d;
        }
        button {
          padding: 15px 50px;
          box-sizing: border-box;
          font-style: normal;
          font-weight: bold;
          margin-top: 0;
          margin-bottom: 0;
          font-size: 16px;
          outline: none;
          border-radius: 30px;
          &:hover {
            opacity: 0.7;
          }
          @media (max-width: @mobile) {
              padding: 10px 20px;
              color: #000;
              width: 100%;
              font-size: 14px;
              margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>