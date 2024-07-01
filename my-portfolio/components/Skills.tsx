"use client"

export default function Skills() {
    return (
        <section className="my-8">
            <h2 className="text-4xl font-bold text-center mb-4">What I do</h2>
            <div className="grid grid-cols-3 gap-4">
                {/* Add your skill cards here */}
                <div className="p-4 border rounded">Skill 1</div>
                <div className="p-4 border rounded">Skill 2</div>
                <div className="p-4 border rounded">Skill 3</div>
            </div>
        </section>
    );
}
