"use client"

export default function Skills() {
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">What I do</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Add your skill cards here */}
                <div className="p-4 border rounded">Skill 1</div>
                <div className="p-4 border rounded">Skill 2</div>
                <div className="p-4 border rounded">Skill 3</div>
            </div>
        </div>
    );
}
