/**
 * Created by jagger on 2017/7/12.
 */

export async function init ({dispatch}) {
  await dispatch('user/init')
  await dispatch('user/getUserInfo')
  await dispatch('lists/fetchDetails')
}
