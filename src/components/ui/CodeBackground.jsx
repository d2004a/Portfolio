import { motion } from 'framer-motion';

const snippets = [
  "const [user, setUser] = useState(null);",
  "await db.collection('projects').find().toArray();",
  "useEffect(() => { trackPerformance(); }, []);",
  "const token = jwt.sign({ id }, process.env.SECRET);",
  "router.get('/api/v1/auth', authenticate);",
  "const blob = await azureContainer.getBlob();",
  "export const metadata = { title: 'Portfolio' };",
  "git commit -m 'feat: optimized cloud infrastructure'",
  "npm install framer-motion lucide-react",
  "res.status(200).json({ success: true, data });",
  "const client = new MongoClient(process.env.MONGO_URI);",
  "console.log('Server running on port 3000...');"
];

const FloatingCode = ({ text, index }) => {
  const duration = 15 + Math.random() * 20;
  const delay = Math.random() * 10;
  const left = Math.random() * 90;
  const opacity = 0.05 + Math.random() * 0.15;
  const fontSize = 10 + Math.random() * 6;

  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ 
        y: "-20vh", 
        opacity: [0, opacity, opacity, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      style={{ 
        left: `${left}%`, 
        fontSize: `${fontSize}px`,
        whiteSpace: 'nowrap'
      }}
      className="absolute font-mono text-primary-light pointer-events-none select-none"
    >
      {text}
    </motion.div>
  );
};

const CodeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-dark-900">
      {/* Background Glows to keep it from being too flat */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating Snippets */}
      {Array.from({ length: 25 }).map((_, i) => (
        <FloatingCode 
          key={i} 
          text={snippets[i % snippets.length]} 
          index={i} 
        />
      ))}
    </div>
  );
};

export default CodeBackground;
