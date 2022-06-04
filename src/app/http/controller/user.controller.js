import { UserRepository } from '../../../domain/repository/user.repository.js';

/**
 * @param {import('express').IRouter} router
 */
export function UserController(router) {
  const userRepository = new UserRepository();

  const routes = {
    getOne(req, res, next) {
      res.json(userRepository.findById(req.params.id));
    },
    getList(req, res, next) {
      const data = userRepository.find(req.query);
      res.json({
        totalPages: 1,
        data
      });
    }
  };
  router.get('/', routes.getList);
  router.get('/:id', routes.getOne);
  return router;
}