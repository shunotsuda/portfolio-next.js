const loading = () => {
    return (
        <div
            className="min-h-screen h-full flex justify-center items-center"
            aria-label="読み込み中"
        >
            <div className="animate-spin h-10  md:h-20 w-10 md:w-20 border-1 md:border-2 border-gray-600 rounded-full border-t-transparent"></div>
        </div>
    );
};

export default loading;
