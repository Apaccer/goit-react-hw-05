const MovieList = () => {
  return (
    <ul>
      {Array.isArray() &&
        users.map((movie) => {
          return (
            <MailBoxListItem
              key={movie.id}
              onDeleteUser={onDeleteUser}
              user={user}
            />
          );
        })}
    </ul>
  );
};

export default MovieList;
