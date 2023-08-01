import { ref } from 'vue'

import type { SetupContext } from 'vue'
import type { GraphicCardEmits, GraphicCardProps } from '../graphic-card'

export const useGraphicCard = (
  props: GraphicCardProps,
  emits: SetupContext<GraphicCardEmits>['emit']
) => {
  // 分割显示的查看用户头像列表和头像数量
  const viewUserAvatars = ref<string[]>([])
  const viewUserCount = ref<number>(0)

  if (props.showViewUser) {
    viewUserAvatars.value = props.viewUserAvatars.slice(
      0,
      props.maxViewUserAvatarCount
    )
    viewUserCount.value = props.viewUserAvatars.length
  }

  // 卡片点击事件
  const cardClickEvent = () => {
    emits('click')
  }

  // 用户头像点击事件
  const handleAvatarClick = () => {
    emits('avatarClick')
  }

  // 点击查看数量
  const handleViewClick = () => {
    emits('viewClick')
  }

  // 点击评论数量
  const handleCommentClick = () => {
    emits('commentClick')
  }

  // 点击点赞数量
  const handleLikeClick = () => {
    emits('likeClick')
  }

  return {
    viewUserAvatars,
    viewUserCount,
    cardClickEvent,
    handleAvatarClick,
    handleViewClick,
    handleCommentClick,
    handleLikeClick,
  }
}
