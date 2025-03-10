export function BottomBlur() {
    return (
        <div
            className="fixed bottom-0 inset-x-0 h-16 w-full
            bg-background to-transparent backdrop-blur-lg 
            [-webkit-mask-image:linear-gradient(to_top,black,transparent)] 
            dark:bg-background"
        />
    )
}