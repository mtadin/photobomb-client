import createUserRepository from '../api/userRepository'

export default (ctx, inject) => {
  const userRepository = createUserRepository(ctx.$axios)

  inject('userRepository', userRepository)
}
