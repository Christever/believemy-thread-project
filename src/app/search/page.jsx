import ConnecterLayout from "@/components/ConnectedLayout/ConnectedLayout";

export default function Search() {
    return (
        <ConnecterLayout>
            {/*  */}
            <div className="mt-10 md:w-[700px] mx-auto w-full">
                {/* Search */}
                <form>
                    <input
                        type="search"
                        placeholder="Rechercher"
                        className="input"
                    />
                </form>

                {/* Results */}
                <div className="mt-32 text-threads-gray-light text-center">
                    Recherchez des profils à découvrir
                </div>
            </div>
        </ConnecterLayout>
    );
}
