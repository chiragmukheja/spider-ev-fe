const PageContainer = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        {children}
      </div>
    );
  };
  
  export default PageContainer;
  