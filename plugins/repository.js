import createUserRepository from '../api/userRepository'
import createPostRepository from '../api/PostRepository'

export default (ctx, inject) => {
  const userRepository = createUserRepository(ctx.$axios)
  const postRepository = createPostRepository(ctx.$axios)

  inject('userRepository', userRepository)
  inject('postRepository', postRepository)
}
