const Container = ({ children }) => {
  return (
    <div className="max-w-[1366px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 mx-auto">
      {children}
    </div>
  );
};

export default Container;
