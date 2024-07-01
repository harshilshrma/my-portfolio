"use client"

export default function Projects() {
    return (
        <section className="my-8">
            <h2 className="text-2xl font-bold text-center mb-4">My Projects</h2>
            <div className="grid grid-cols-3 gap-4">
                {/* Add your project cards here */}
                <div className="p-4 border rounded">Project 1</div>
                <div className="p-4 border rounded">Project 2</div>
                <div className="p-4 border rounded">Project 3</div>
            </div>
        </section>
    );
}
