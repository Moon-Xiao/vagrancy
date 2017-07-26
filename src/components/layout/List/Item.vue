<template>
  <li class="item" :class="{highlight: clickAble}" :style="height ? 'height: '+height+'px' : ''">
    <div class="content" :style="'height: '+ 44 +'px'" v-touch.tap.press>
      <div class="left">
        <img v-if="checked" class="checked" src="./images/Checkmark.png">
        <div v-if="icon" class="icon" :style="`background-image: url('${icon}')`"></div>
        <slot v-else name="image"></slot>
        <span v-if="title" class="title" v-text="title"></span>
        <slot v-else name="title"></slot>
      </div>
      <div class="right">
        <span v-if="details" class="details" v-text="details"></span>
        <slot v-else name="details"></slot>
        <img class="disclosure" :class="disclosure" v-if="disclosureIcon" :src="disclosureIcon"/>
      </div>
    </div>
    <div v-if="height > 44" class="expand">
      <slot name="expand" :style="'height: '+(height-44)+'px'"></slot>
    </div>
    <div class="mask"></div>
  </li>
</template>

<script>
  import disclosureIndicator from './images/Disclosure Indicator.png'
  import detailDisclosure from './images/Detail Disclosure.png'
  import Touchable from '../mixins/Touchable'

  export default {
    mixins: [Touchable],
    props: {
      icon: String,
      title: String,
      details: String,
      height: Number,
      disclosure: {
        type: String,
        validator (value) {
          return ['indicator', 'detail'].indexOf(value) !== -1
        }
      },
      checked: {
        type: Boolean,
        default: false
      },
      to: [String, Object]
    },
    computed: {
      disclosureIcon () {
        if (!this.disclosure) {
          return false
        } else {
          switch (this.disclosure) {
            case 'indicator':
              return disclosureIndicator
            case 'detail':
              return detailDisclosure
            default:
              return false
          }
        }
      },
      clickAble () {
        return this.to
      }
    }
  }
</script>

<style lang="less">
  @list-item-height: 44px;

  ul.list {
    > li.item {
      height: @list-item-height;
      position: relative;
      background: white;

      > div.expand {
        padding: 0 8px 8px;
        box-sizing: border-box;
      }

      &:first-child:before {
        left: 0;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        left: 17px;
        top: 0;
        border-top: 1px solid #C8C7CC;
        box-sizing: border-box;
        height: 100%;
        @media screen and (-webkit-device-pixel-ratio: 2) {
          transform-origin: 0 0;
          height: 200%;
          transform: scaleY(0.5);
        }
        @media screen and (-webkit-device-pixel-ratio: 3) {
          transform-origin: 0 0;
          height: 300%;
          transform: scaleY(0.33);
        }
      }

      &:last-child:after {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        border-bottom: 1px solid #C8C7CC;
        box-sizing: border-box;
        height: 100%;
        @media screen and (-webkit-device-pixel-ratio: 2) {
          transform-origin: 0 1px;
          height: 200%;
          transform: scaleY(0.5);
        }
        @media screen and (-webkit-device-pixel-ratio: 3) {
          transform-origin: 0 1px;
          height: 300%;
          transform: scaleY(0.33);
        }
      }

      > div.content {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        padding: 8px;
        box-sizing: border-box;

        & > div.left {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          & > img.checked {
            height: 11px;
          }

          & > div.icon {
            width: @list-item-height - 2 * 8px;
            height: @list-item-height - 2 * 8px;
            background-size: cover;
            background-position: center;
          }

          & > span.title {
            color: #030303;
            font-size: 17px;
            padding: 8px;
          }
        }

        & > div.right {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          & > span.details {
            color: #8F8E94;
            font-size: 15px;
            padding: 8px;
          }

          & > img.disclosure {
            &.indicator {
              height: 13px
            }
            &.detail {
              height: 22px
            }
          }

        }
      }

      div.divider {
        width: 200%;
        height: 1px;
        position: absolute;
        bottom: 0;
        transform-origin: 0 0;
        transform: scale(0.5, 0.5);
        border-bottom: 1px solid #C8C7CC;
        left: 17px;
      }

      > div.mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        background: rgb(0, 0, 0);
        pointer-events: none;
        transition: opacity 200ms linear;
      }

      &.tapped > div.mask {
        opacity: 0.3;
      }

      &.pressing > div.mask {
        opacity: 0.6;
      }

    }
  }
</style>
