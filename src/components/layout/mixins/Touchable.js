/**
 * events:
 * tap, press, touch
 */

export default {
  props: {
    to: [String, Object],
    disabled: Boolean
  },
  computed: {
    touchable () {
      return true
    }
  },
  directives: {
    touch: {
      bind (el, binding, node) {
        let component = node.context
        if (component.touchable) {
          el.addEventListener('contextmenu', (event) => {
            event.stopPropagation()
            event.preventDefault()
          })
          if (binding.modifiers) {
            if (binding.modifiers.tap) {
              el.addEventListener('touchstart', (event) => {
                event.stopPropagation()
                component.$el.classList.add('tapped')
                setTimeout(() => {
                  component.$el.classList.remove('tapped')
                }, 200)
                if (component.disabled) return
                component.$emit('tap', event)
              })
            }
            if (binding.modifiers.press) {
              el.addEventListener('touchstart', (event) => {
                event.stopPropagation()
                if (component.disabled) return
                el._pressTimer = setTimeout(() => {
                  component.$emit('press', event)
                  el._pressTimer = undefined
                }, 500)
                el._pressingTimer = setTimeout(() => {
                  component.$el.classList.add('pressing')
                }, 200)
              })
              el.addEventListener('touchend', () => {
                if (el._pressTimer) {
                  clearTimeout(el._pressTimer)
                  el._pressTimer = undefined
                }
                if (el._pressingTimer) {
                  clearTimeout(el._pressingTimer)
                  el._pressingTimer = undefined
                }
                component.$el.classList.remove('pressing')
              })
            }
            if (binding.modifiers.click) {
              el.addEventListener('click', event => {
                event.stopPropagation()
                if (component.disabled) return
                component.$emit('click', event)
              })
            }
          } else if (Object.keys(binding.modifiers).length === 0) {
            el.addEventListener('click', event => {
              event.stopPropagation()
              if (component.disabled) return
              component.$emit('click', event)
            })
          }
        }
      }
    }
  }
}
