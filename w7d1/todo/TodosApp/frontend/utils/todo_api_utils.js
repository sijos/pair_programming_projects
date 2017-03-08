export const getRekd = function () {
  return $.ajax({
    method: "GET",
    url: "/api/todos"
  });
};

export const posterBoy = function (todo) {
  return $.ajax({
    method: "POST",
    url: "/api/todos",
    data: {todo}
  });
};

export const patchAdams = function (todo) {
  return $.ajax({
    method: "PATCH",
    url: `/api/todos/${todo.id}`,
    data: {todo}
  });
};
