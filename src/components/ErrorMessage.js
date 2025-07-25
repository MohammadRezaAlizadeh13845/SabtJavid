import { AnimatePresence, motion } from "framer-motion";
const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <p className="min-h-[20px] text-[12px]  text-red-600 relative mr-2 dark:text-red-400">
        <AnimatePresence mode="wait">
          {errorMessage ? (
            <motion.span
              key={errorMessage}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 w-full"
            >
              {errorMessage}
            </motion.span>
          ) : (
            <motion.span
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 w-full"
            >
              {" "}
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </div>
  );
};

export default ErrorMessage;
