"use client"

export default function Resume() {
    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* grid 1 */}
                <div className="bg-secondary p-8 rounded-lg shadow-md flex flex-col justify-around">
                    <h1 className="text-3xl md:text-4xl font-bold text-left mb-5">My Resume</h1>
                        
                </div>
                {/* grid 2 */}
                <div className="bg-background p-8 rounded-lg shadow-md">
                    
                </div>
            </div>
        </div>
    );
}
